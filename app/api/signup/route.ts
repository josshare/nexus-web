import { DynamoDB } from 'aws-sdk';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const dynamoDB = new DynamoDB.DocumentClient({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export async function POST(request: Request) {
  try {
    const { email, name, password } = await request.json();

    // Basic validation
    if (!email || !name || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create user record
    const params = {
      TableName: process.env.DYNAMODB_TABLE_NAME || 'Users',
      Item: {
        id: uuidv4(), // Generate unique ID
        email,
        name,
        // Note: In a production environment, you should hash the password
        // before storing it in the database
        password
      }
    };

    await dynamoDB.put(params).promise();

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}