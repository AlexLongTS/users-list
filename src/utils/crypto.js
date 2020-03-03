function generateKey(e,t,n){return window.crypto.subtle.importKey("raw",new TextEncoder("utf-8").encode(e),{name:"PBKDF2"},!1,["deriveBits","deriveKey"]).then(e=>window.crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:n,hash:"SHA-512"},e,{name:"HMAC",hash:"SHA-512",length:384},!0,["sign"])).then(e=>crypto.subtle.exportKey("raw",e)).then(e=>btoa(String.fromCharCode(...new Uint8Array(e))))}

export async function generateEncryptedPassword(email, password) {
  try {
    const enc = new TextEncoder();
    const salt = enc.encode(email.toLowerCase() + 'ts3Login' + password);
    const key = await generateKey(password, salt, 10000)
    return {error: false, key};
  } catch (error) {
    return {error, message: 'Browser Not Supported - Cannot perform preflight encryption', key: null};
  }
}