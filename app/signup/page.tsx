'use client'

import { useState } from 'react';
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, password }),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      // Redirect to login page after successful signup
      window.location.href = '/login';
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Card className="max-w-full w-[340px] h-[460px] relative">
        <CardHeader className="flex gap-3 justify-center">
          <h1 className="text-2xl font-bold">Create Account</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isRequired
            />
            <Input
              label="Name"
              placeholder="Enter your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              {isLoading ? 'Creating account...' : 'Sign up'}
            </Button>
          </form>
          <div className="text-center mt-4">
            <Link href="/login" color="primary">
              Already have an account? Log in
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}