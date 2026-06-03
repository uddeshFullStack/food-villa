import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
  type UserCredential,
} from "firebase/auth";
import { auth, isConfigured } from "./firebase";

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}

function requireAuth() {
  if (!auth || !isConfigured) {
    throw new AuthError(
      "Firebase is not configured. Add your Firebase credentials to the .env file."
    );
  }
  return auth;
}

export async function signIn(
  email: string,
  password: string
): Promise<UserCredential> {
  const authInstance = requireAuth();
  try {
    return await signInWithEmailAndPassword(authInstance, email, password);
  } catch (err: unknown) {
    const code = (err as { code?: string }).code ?? "";
    throw new AuthError(friendlyError(code));
  }
}

export async function signUp(
  email: string,
  password: string,
  displayName: string
): Promise<UserCredential> {
  const authInstance = requireAuth();
  try {
    const cred = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    await updateProfile(cred.user, { displayName });
    return cred;
  } catch (err: unknown) {
    const code = (err as { code?: string }).code ?? "";
    throw new AuthError(friendlyError(code));
  }
}

export async function signOut(): Promise<void> {
  const authInstance = requireAuth();
  await firebaseSignOut(authInstance);
}

function friendlyError(code: string): string {
  switch (code) {
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Invalid email or password.";
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";
    default:
      return "Something went wrong. Please try again.";
  }
}
