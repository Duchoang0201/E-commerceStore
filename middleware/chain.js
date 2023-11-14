import authCheck from "./authCheck";
import authExp from "./authExp";

export function combinedMiddleware() {
  return async (req) => {
    // Execute authExp
    const authExpResponse = await authExp(req);

    // Execute authCheck passing authExp as middleware
    const authCheckMiddleware = authCheck(() => authExpResponse);
    return authCheckMiddleware(req);
  };
}
