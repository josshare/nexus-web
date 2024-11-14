'use client'

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import { useState } from 'react';
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // TODO: Implement actual login logic here
      console.log('Login attempted with:', { username, password });
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API call
      // If login is successful, you might want to redirect or update app state
      // For now, we'll just log a success message
      console.log('Login successful');
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className="flex flex-col w-full justify-center items-center">
    <Card className="max-w-full w-[340px] h-[400px] relative">
        <CardHeader className="flex gap-3 justify-center">
          <h1 className="text-2xl font-bold">Login</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Username"
              placeholder="Enter your username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              isRequired
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isRequired
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button color="primary" type="submit" isLoading={isLoading}>
              {isLoading ? 'Logging in...' : 'Log in'}
            </Button>
          </form>
          <div className="text-center mt-4">
            <Link href="/signup" color="primary">
              Create a new account
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
    
  );
}
