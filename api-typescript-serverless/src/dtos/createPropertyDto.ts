interface CreateProperty {
    body: {
      propertyName: string;
      address: string;
      owner:string;
      city:string;
      federalState:string;
      zip_code:string;     
    };
  }
  
  export default CreateProperty;