interface IBaseProps {
  endpoint: string;
  method: "POST" | "DELETE" | "PUT" | "GET" | "HEAD";
  errorMessage?: string;
}

export function useFetch<T>({
  endpoint,
  method,
  errorMessage = "Algo está errado",
}: IBaseProps): <U>(body?: U | undefined) => Promise<T extends undefined ? undefined : T> {
  const sendHttpRequest = async <U>(body?: U) => {
    const response = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : null,
      method: method,
      cache: "no-cache",
    });

    const text = await response.text();

    if (!response.ok) {
      const backendErrorMessage: string = JSON.parse(text).message;
      throw new Error(backendErrorMessage ?? errorMessage);
    }

    const data: T extends undefined ? undefined : T = text ? await JSON.parse(text) : undefined;

    return data;
  };

  return sendHttpRequest;
}
