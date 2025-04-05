import { useState } from "react";
import { instance } from "../hooks/instance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type FormData = {
  email: string;
  name: string;
  last_name: string;
  birth_date: string;
  password: string;
  otp: string;
};

const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    last_name: "",
    birth_date: "",
    password: "",
    otp: "",
  });

  const handleSendOTP = async () => {
    try {
      await instance().post("/auth/send-otp", { email: formData.email });
      setOtpSent(true);
      toast.success("OTP sent successfully");
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      }
      toast.error("Failed to send OTP");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await instance().post("/auth/register", formData);
      navigate("/login");
      toast.success("User registered successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to register user");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
          Sign Up
        </h1>
        {!otpSent ? (
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 dark:border-gray-600 p-3 w-full rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-3 rounded-lg"
              onClick={handleSendOTP}
            >
              Send OTP
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Do you have an account??{" "}
              <a
                href="/Login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login
              </a>
            </p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="OTP"
              className="border border-gray-300 dark:border-gray-600 p-3 w-full rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e) =>
                setFormData({ ...formData, otp: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 dark:border-gray-600 p-3 w-full rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 dark:border-gray-600 p-3 w-full rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
            />
            <input
              type="date"
              placeholder="Birth Date"
              className="border border-gray-300 dark:border-gray-600 p-3 w-full rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e) =>
                setFormData({ ...formData, birth_date: e.target.value })
              }
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="border border-gray-300 dark:border-gray-600 p-3 w-full rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 transition text-white p-3 rounded-lg"
            >
              Register
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Do you have an account??{" "}
              <a
                href="/Login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default SignupForm;
