/**
 * @description: Check if any of the arguments are truthy
 */
export function any<T>(args: T[]): boolean {
  return args.some((arg) => !!arg);
}
