import { Controller, Get, Path, Route } from "tsoa";

@Route("test")
export class TestController extends Controller {
  @Get("/")
  public async getTest() {
    return { message: "Hello from Tsoa!", timestamp: new Date().toISOString() };
  }

  @Get("/echo/{message}")
  public async echoMessage(@Path() message: string) {
    return `Echo: ${message}`;
  }
}
