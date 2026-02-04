{
  UserData;
}
import "./Users.json";

export const users = userData;

export function getData() {
  return users;
}

export function getUserById(id) {
  return users.find((user) => user.id === id);
}
