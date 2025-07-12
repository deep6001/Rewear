import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpPage = ({ onNavigateToSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .required('Please confirm your password'),
    phone: Yup.string()
      .matches(/^\+?[\d\s-()]+$/, 'Please enter a valid phone number')
      .notRequired(),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Sign up with:', values);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  from-slate-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl  grid lg:grid-cols-1 gap-8 items-center">

        {/* Branding Left Side Skipped for Brevity */}

        <div className="w-full max-w-md mx-auto lg:max-w-none">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <div className="lg:hidden text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-slate-800">StyleHub</h1>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Create Your Account</h2>
              <p className="text-slate-600">Join thousands of fashion enthusiasts</p>
            </div>

            <Formik
              initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
                firstName: '',
                lastName: '',
                phone: ''
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="space-y-6">

                  {/* First and Last Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <Field
                          type="text"
                          name="firstName"
                          placeholder="John"
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${errors.firstName && touched.firstName ? 'border-red-300 bg-red-50' : 'border-slate-300'}`}
                        />
                      </div>
                      <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <Field
                          type="text"
                          name="lastName"
                          placeholder="Doe"
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${errors.lastName && touched.lastName ? 'border-red-300 bg-red-50' : 'border-slate-300'}`}
                        />
                      </div>
                      <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Field
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${errors.email && touched.email ? 'border-red-300 bg-red-50' : 'border-slate-300'}`}
                      />
                    </div>
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number <span className="text-slate-400">(optional)</span></label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${errors.phone && touched.phone ? 'border-red-300 bg-red-50' : 'border-slate-300'}`}
                      />
                    </div>
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Field
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Enter your password"
                        className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${errors.password && touched.password ? 'border-red-300 bg-red-50' : 'border-slate-300'}`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Field
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${errors.confirmPassword && touched.confirmPassword ? 'border-red-300 bg-red-50' : 'border-slate-300'}`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <>
                        <span>Create Account</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    By creating an account, you agree to our{' '}
                    <button className="text-orange-600 hover:text-orange-700 font-medium">Terms of Service</button>{' '}
                    and{' '}
                    <button className="text-orange-600 hover:text-orange-700 font-medium">Privacy Policy</button>
                  </p>

                  <div className="text-center pt-4 border-t border-slate-100">
                    <h1 className="text-slate-600">
                      Already have an account?{' '}
                      <Link to='/login'>
                        <p className="text-orange-600 hover:text-orange-700 font-semibold transition-colors">Sign In</p>
                      </Link>
                    </h1>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
