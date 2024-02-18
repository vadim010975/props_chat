export default interface MessageInterface {
  id: string;
  from: { name: string };
  type: string;
  time: string;
  text?: string;
}
