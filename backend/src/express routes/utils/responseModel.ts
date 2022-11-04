class ResModel {
  message: string | null;
  data: unknown;
  
  constructor(message: string | null, data: unknown) {
    this.message = message;
    this.data = data;
  }
}

export default ResModel