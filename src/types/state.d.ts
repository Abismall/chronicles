declare namespace State {
  interface StateObject {
    id: string;
  }
  interface Group extends StateObject {
    title: string;
  }
  interface Chapter extends StateObject {
    title: string;
  }
}
