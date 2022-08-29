type HttpHandler = (req: Request) => Response;

class Server
{
  public handler: Map<string, HttpHandler>; 
  public listen(port: number): void {
    Deno.listen({port: port});
  }
};
