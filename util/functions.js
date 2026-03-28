import { compare, hash } from "bcrypt";


// DB connnect functions
export function dbConnectCallback(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Table created successful.");
}
export function dbOperationCallback(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Operation completed successful.");
}

//Hash functions
export async function doHash(password, saltValue) {
  const result = await hash(password, saltValue);
  return result;
}

export async function doHashValidation(password, hashedPassword) {
  const result = await compare(password, hashedPassword);
  return result;
}



//sql func
