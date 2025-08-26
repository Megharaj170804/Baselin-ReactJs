import React, { useState } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  terms: boolean;
};

const Chapter8: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: '', age: '', terms: false
  });
  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const [history, setHistory] = useState<FormData[]>([]);

  const validate = () => {
    const e: any = {};
    if (!form.firstName || form.firstName.length < 2) e.firstName = 'First name required (min 2)';
    if (!form.lastName || form.lastName.length < 2) e.lastName = 'Last name required (min 2)';
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.password || form.password.length < 8) e.password = 'Min 8 chars';
    if (form.password !== form.confirmPassword) e.confirmPassword = 'Passwords must match';
    const age = parseInt(form.age); if (!form.age || isNaN(age) || age < 13 || age > 120) e.age = 'Age 13-120';
    if (!form.terms) e.terms = 'Accept terms';
    return e;
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    setErrors((err: any) => ({ ...err, [name]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length === 0) {
      setHistory(h => [...h, form]);
      setSubmitted(true);
      setForm({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', age: '', terms: false });
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  return (
    <ChapterLayout chapterNumber={8} title="React Forms (Advanced)" description="Advanced form validation, error handling, and user experience improvements">
      <form onSubmit={onSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
        <input name="firstName" value={form.firstName} onChange={onChange} placeholder="First Name" />
        {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
        <input name="lastName" value={form.lastName} onChange={onChange} placeholder="Last Name" />
        {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
        <input name="email" value={form.email} onChange={onChange} placeholder="Email" />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        <input name="password" type="password" value={form.password} onChange={onChange} placeholder="Password" />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={onChange} placeholder="Confirm Password" />
        {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
        <input name="age" type="number" value={form.age} onChange={onChange} placeholder="Age" />
        {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}
        <label>
          <input name="terms" type="checkbox" checked={form.terms} onChange={onChange} /> Accept Terms
        </label>
        {errors.terms && <div style={{ color: 'red' }}>{errors.terms}</div>}
        <button type="submit">Register</button>
        {submitted && <div style={{ color: 'green' }}>Form Submitted!</div>}
      </form>
      <pre>{JSON.stringify(form, null, 2)}</pre>
      {history.length > 0 && (
        <div>
          <b>Submissions:</b>
          <ul>
            {history.map((h, i) => (
              <li key={i}>{h.firstName} {h.lastName} ({h.email}) Age: {h.age}</li>
            ))}
          </ul>
        </div>
      )}
    </ChapterLayout>
  );
};

export default Chapter8;