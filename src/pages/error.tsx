import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError() as Error;
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, an error occurred...</h1>

      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação. Por favor, tente novamente.
      </p>

      <pre>{error.message || JSON.stringify(error)}</pre>

      <p className="text-accent-foreground">
        Voltar para o <Link to={"/"}>Dashboard</Link>
      </p>
    </div>
  );
}

export default Error;
