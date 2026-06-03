import React, { useState, useRef, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { signIn, signUp } from "../../services/auth/api";
import { useToast } from "../../utils/toastHelper";
import { ROUTES } from "../../constants/routes";
import { isConfigured } from "../../services/auth/firebase";
import UserContext from "../../provider/UserContext";

type Mode = "login" | "signup";

export function Login() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const toast = useToast();

  // Already signed in — send them home
  if (user) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  const [mode, setMode] = useState<Mode>("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const email = emailRef.current?.value.trim() ?? "";
    const password = passwordRef.current?.value ?? "";
    const name = nameRef.current?.value.trim() ?? "";

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (mode === "signup" && !name) {
      setError("Please enter your name.");
      return;
    }

    if (!isConfigured) {
      setError(
        "Firebase is not configured yet. Add your Firebase credentials to the .env file."
      );
      return;
    }

    setLoading(true);
    try {
      if (mode === "login") {
        await signIn(email, password);
        toast.success("Welcome back!");
      } else {
        await signUp(email, password, name);
        toast.success("Account created! Welcome to Zestora.");
      }
      navigate(ROUTES.HOME);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  function toggleMode() {
    setMode((prev) => (prev === "login" ? "signup" : "login"));
    setError(null);
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo mark */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-2xl font-black text-white shadow-lg">
            Z
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {mode === "login"
              ? "Sign in to continue to Zestora"
              : "Join Zestora — taste the city"}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-100"
        >
          {/* Firebase not configured banner */}
          {!isConfigured && (
            <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              <strong>Setup required:</strong> Add Firebase credentials to your{" "}
              <code className="rounded bg-amber-100 px-1">.env</code> file to
              enable authentication.
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Name — signup only */}
          {mode === "signup" && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                id="name"
                ref={nameRef}
                type="text"
                autoComplete="name"
                placeholder="Uddesh Bhagat"
                className="login-input"
              />
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              ref={emailRef}
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="login-input"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              ref={passwordRef}
              type="password"
              autoComplete={
                mode === "login" ? "current-password" : "new-password"
              }
              placeholder={mode === "login" ? "••••••••" : "Min. 6 characters"}
              className="login-input"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 disabled:opacity-60"
          >
            {loading
              ? mode === "login"
                ? "Signing in…"
                : "Creating account…"
              : mode === "login"
              ? "Sign in"
              : "Create account"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={toggleMode}
            className="font-semibold text-orange-600 hover:underline"
          >
            {mode === "login" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
