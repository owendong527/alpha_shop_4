export const CreditCardData = {
  Name: "",
  CardNum: "",
  Date: "",
  CvcCcv: "",
};

export const CreditCardDataInput = (e) => {
  const name = e.target.name;
  CreditCardData[name] = e.target.value;
  console.log(CreditCardData);
};

// export function CreditCardDataInput(e) {
//   const name = e.target.name;
//   CreditCardData[name] = e.target.value;
//   console.log(CreditCardData);
// }
