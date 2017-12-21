import { jsonDB } from "./users";

describe("list", () => {
  test("lists no users when none have been added", async () => {
    const db = new jsonDB();
    expect(await db.list()).toHaveLength(0);
  });

  test("lists users when they have been added", async () => {
    const db = new jsonDB();
    const usersToAdd = [
      { name: "User 0", password: "Password 0" },
      { name: "User 1", password: "Password 1" },
      { name: "User 2", password: "Password 2" }
    ];
    for (const user of usersToAdd) {
      await db.create(user.name, user.password);
    }
    const userList = await db.list();
    expect(userList).toHaveLength(usersToAdd.length);
    for (const num of [0, 1, 2]) {
      expect(userList[num]).toEqual({ id: `${num}`, name: `User ${num}` });
    }
  });

  test("lists users without password hash field", async () => {
    const db = new jsonDB();
    const usersToAdd = [
      { name: "User 0", password: "Password 0" },
      { name: "User 1", password: "Password 1" },
      { name: "User 2", password: "Password 2" }
    ];
    for (const user of usersToAdd) {
      await db.create(user.name, user.password);
    }
    const userList = await db.list();
    expect(userList).toHaveLength(usersToAdd.length);
    for (const user of userList) {
      expect(user.passwordHash).toBeUndefined();
    }
  });
});
