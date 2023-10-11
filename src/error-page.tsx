import { useRouteError } from "react-router-dom";

/**
 * @description Error page component
 * @version 1.0.0
 */
export default function ErrorPage(): JSX.Element {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-4xl font-bold mb-5">Oops!</h1>
      <p className="mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="">
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </div>
  );
}
