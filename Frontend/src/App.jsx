import { useEffect, useState } from "react";
import { Sun, Moon, MailMinus } from "lucide-react";
import axios from "axios";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const [theme, setTheme] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [allFeedbacks, setAllFeedbacks] = useState([]);
  const [response, setResponse] = useState("");
  const postingFeedback = () => {
    if ([fullName, email, feedback].some((each) => each.trim === "")) {
      setError("all fields are to submit this form");
    }
    try {
      axios
        .post("http://localhost:8000/api/v1/user/submit-feedback", {
          senderFullName: fullName,
          email: email,
          feedbackContent: feedback,
        })
        .then((res) => {
          console.log(res.data.data);
          setResponse(res.data.data);
        });
    } catch (error) {
      setError(error.message);
    }
  };
  const fetchAllData = () => {
    try {
      axios.get("http://localhost:8000/api/v1/admin/feedbacks").then((res) => {
        setAllFeedbacks(res.data.data);
      });
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    console.log(allFeedbacks);
  }, [allFeedbacks]);

  useEffect(() => {
    if (theme) document.querySelector("html").classList.add("dark");
    else document.querySelector("html").classList.remove("dark");
  }, [theme]);
  return (
    <>
      <style>
        {`
          input:user-valid,textarea:user-valid{
          border-color:#1A8CD8;
          color:#1A8CD8;
          }
          input:user-invalid,textarea:user-invalid{
          border-color:#ad5852;
          color:#ad5852;
          }
          `}
      </style>
      <div className="h-[100svh] sm:overflow-hidden">
        <header className="grid grid-flow-col sm:mx-[2rem] mt-[1px] items-center justify-between">
          <h1 className="w-fit sm:text-[20px] text-[15px] font-semibold dark:text-gray-300">
            FeedBack Collector
          </h1>
          <div
            className="grid grid-flow-col justify-center gap-[2rem] w-fit
          items-center
          "
          >
            <label className="relative w-14 h-8 cursor-pointer grid place-items-center">
              <div className="absolute top-1 right-[3.5rem] dark:text-gray-300">
                {toggle ? "Admin" : "User"}
              </div>
              <input
                type="checkbox"
                className="sr-only peer"
                checked={toggle}
                onChange={() => setToggle((prev) => !prev)}
              />
              <div
                className="w-10 h-6 bg-gray-300 dark:bg-[#000000] rounded-[100px]
            peer-checked:bg-green-700 transition-colors"
              ></div>
              <div
                className="absolute sm:top-[5px] top-[6px] left-[10px] w-5 h-5 bg-white 
            dark:bg-white rounded-full shadow-md transition-transform peer-checked:translate-x-[1rem]"
              ></div>
            </label>
            <div>
              {theme ? (
                <Sun
                  onClick={() => setTheme((prev) => !prev)}
                  className="hover:cursor-pointer dark:text-white "
                />
              ) : (
                <Moon
                  onClick={() => setTheme((prev) => !prev)}
                  className="hover:cursor-pointer dark:text-white "
                />
              )}
            </div>
          </div>
        </header>
        <hr className="mt-[.5rem] dark:bg-gray-500" />
        {!toggle ? (
          <main className="grid place-items-center h-full">
            {response.length == 0 ? (
              <form
                action="submit"
                className="bg-gray-200 dark:bg-[#202020] rounded-[10px] py-[1.5rem] h-fit sm:w-[30rem] w-[90vw] px-[1rem] grid gap-[2rem] justify-items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  postingFeedback();
                }}
              >
                <div className="grid  w-full  gap-[2rem]">
                  <input
                    type="text"
                    value={fullName}
                    required
                    className="border-[1px] dark:border-gray-500 rounded-[3px] h-[2rem]  focus:outline-none w-full pl-[.5rem]"
                    placeholder="Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                    minLength={7}
                  />
                  <input
                    type="email"
                    value={email}
                    required
                    className="border-[1px] dark:border-gray-500 rounded-[3px] h-[2rem] focus:outline-none w-full pl-[.5rem]"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    minLength={12}
                  />
                </div>
                <textarea
                  placeholder="Feedback ~ at least 10 words required"
                  required
                  minLength={10}
                  className="border-[1px] dark:border-gray-500 rounded-[3px] focus:outline-none
                h-[10rem] min-h-[10rem] max-h-[50vh]  w-full px-[.5rem] pt-[1rem]
                "
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="bg-green-400 dark:bg-green-700 w-[10rem] h-[2rem] rounded-[3px] hover:cursor-pointer"
                >
                  Submit
                </button>
                <span className="text-red-400">{error}</span>
              </form>
            ) : (
              <h1 className="dark:text-gray-500">
                feedback successFully submitted 🎊
              </h1>
            )}
          </main>
        ) : (
          <main className="grid place-items-center mt-[2rem]">
            <button
              onClick={() => fetchAllData()}
              className="border-[1px] rounded-[5px] transition-all duration-300 sm:p-2 p-[5px] hover:scale-[1.1] hover:cursor-pointer dark:border-gray-500  dark:text-gray-300"
            >
              Get All FeedBacks
            </button>
            <div className="grid gap-[1rem] mt-[3rem] ">
              {allFeedbacks.map((eachFeed, index) => (
                <div
                  key={`${eachFeed.feedbackContent}${index}`}
                  className="border-[1px] dark:border-gray-500 rounded-[5px] sm:p-4 py-4 sm:mx-0 mx-3 px-2
                  hover:scale-[1.1] transition-all duration-200 dark:text-gray-300
                  "
                >
                  <h1>{`By : ${eachFeed.senderFullName}`}</h1>
                  <h1>{`Through : ${eachFeed.email}`}</h1>
                  <p>{`sended : ${eachFeed.feedbackContent}`}</p>
                </div>
              ))}
            </div>
          </main>
        )}
      </div>
    </>
  );
}
export default App;
