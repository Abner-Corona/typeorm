import { db } from "src-ssr/database/connection";
import { usersTable } from "src-ssr/database/tables/users";
import {
  Controller,
  Get,
  Post,
  Route,
  Body,
  SuccessResponse,
  Example,
} from "tsoa";

export interface usersTablex {
  id: number;
  name: string;
  agex: number;
  email: string;
}
@Route("test")
export class TestController extends Controller {
  @Example<usersTablex>({
    agex: 30,
    email: "joshn@example.com",
    id: 1,
    name: "John",
  })
  @Get("/")
  public async getTest() {
    const users = await db.select().from(usersTable);
    console.log("Getting all users from the database: ", users);
    return users;
  }

  @Post("/")
  public async postTest(@Body() requestBody: usersTablex) {
    this.setStatus(201);
    await db.insert(usersTable).values(requestBody);
    return;
  }
}
