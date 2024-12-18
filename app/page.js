
import axios from "axios";

export default function Register() {
  const localLoginURL = process.env.LOCAL_LOGIN_URL;
  const labels = ["hospital name", "email address", "password"]

  console.log(localLoginURL);

  const handleRegister = async (hospitalEmailInput, hospitalPasswordInput) => {
    const result = await axios({
      method: "get",
      url: localLoginURL,
      responseType: "stream",
      data: {
        hospitalEmail: hospitalEmailInput,
        hospitalPassword: hospitalPasswordInput,
      },
    });

    if (result.status != 200) {
      console.log("login error");
    }

    console.log(result);
  };

  const InputComponent = () => {
    return (
      <>
      {labels.map((label, index) => (        
        <div key={index} className="flex w-72 flex-col">
          <label className="mb-2 text-xs text-black font-semibold size-4 capitalize w-full">{label}</label>
          <input type="text" className="w-full mb-4 rounded-md bg-gray-200 h-12" />
        </div>
      ))}
      </>
    );
  };
  return <div className="flex flex-col w-full h-screen justify-center items-center">
    <div className=" border-2 border-slate-900 rounded-md p-12">
      <InputComponent />
      <h1 className="capitalize font-medium mt-2">already have account? Login</h1>
      <div className="w-full flex justify-end">
        <button className="bg-slate-900 w-24 text-white rounded-md mt-12 p-2">Register</button>
      </div>
    </div>
</div>

}
