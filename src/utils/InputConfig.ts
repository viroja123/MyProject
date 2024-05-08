export enum KeyboardType {
    default = 'default',
    numeric = 'numeric',
    emailAddress = 'email-address',
    phonePad = 'phone-pad',
  }
  
  export enum AutoCapitalize {
    characters = 'characters',
    words = 'words',
    sentences = 'sentences',
    none = 'none',
  }
  
  export enum ReturnKeyType {
    next = 'next',
    done = 'done',
  }

  export const InputConfig = {
    SignInInput: [
        {
            PlaceHolder: 'Email Name',
            Label: 'Email',
            KeyboardType: KeyboardType.default,
            ReturnKeyType: ReturnKeyType.next,
            AutoCapitalize: AutoCapitalize.none,
            RightIcon: null,
            ErrorKey: 'fullName',      
        }

    ]

  }