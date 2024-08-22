import "bootstrap/dist/css/bootstrap.min.css";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import bg from "../../assets/bg.jpg";
import {
  Box,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
const ltype = ["Sick leave", "Casual Leave", "Medical Leave"] as const;

const schema = z.object({
  Name: z.string().min(3, { message: "Name is required" }),
  Email: z
    .string()
    .email({ message: "Invalid email" })
    .min(1, { message: "Email is required" }),
  EmpId: z.number().min(1),
  Position: z.string().min(1, { message: "Position is required" }),
  StartDate: z.date(),
  EndDate: z.date(),
  LeaveType: z.enum(ltype, { errorMap: () => ({ message: "required" }) }),
  LeaveDays: z.number().min(1),
  Reason: z.string().min(5, { message: "description is required" }),
});

type formdata = z.infer<typeof schema>;

export interface employye {
  Name: string;
  Email: string;
  EmpID?: number;
  Position: string;
  StartDate: Date;
  EndDate: Date;
  LeaveType: string;
  LeaveDays: number;
  Reason: string;
  status?: string;
}

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formdata>({
    resolver: zodResolver(schema),
  });
  const [employee, setemployee] = useState<employye[]>([]);

  return (
    <>
      <Box backgroundImage={bg} backgroundPosition="center">
        <Heading mb={3} textAlign={"center"} padding={3}>
          Leave Request Form
        </Heading>
        <Box width={"30%"} m={"auto"} mt={2}>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                id="Name"
                className="form-control"
                {...register("Name")}
              />
              {errors.Name && (
                <p className="text-danger">{errors.Name.message}</p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="name@example.com"
                {...register("Email")}
              />
              {errors.Email && (
                <p className="text-danger">{errors.Email.message}</p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">EmpId</label>
              <input
                type="number"
                className="form-control"
                id="EmpID"
                {...register("EmpId", { valueAsNumber: true })}
              />
              {errors.EmpId && (
                <p className="text-danger">{errors.EmpId.message}</p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Position</label>
              <input
                type="string"
                className="form-control"
                id="Position"
                {...register("Position")}
              />
              {errors.Position && (
                <p className="text-danger">{errors.Position.message}</p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">StartDate</label>
              <Input
                {...register("StartDate", { valueAsDate: true })}
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
              {errors.StartDate && (
                <p className="text-danger">{errors.StartDate.message}</p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">EndDate</label>
              <Input
                {...register("EndDate", { valueAsDate: true })}
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
              {errors.EndDate && (
                <p className="text-danger">{errors.EndDate.message}</p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Leave Type</label>
              <Select placeholder="Select option" {...register("LeaveType")}>
                {ltype.map((leave) => (
                  <option key={leave} value={leave}>
                    {leave}
                  </option>
                ))}
              </Select>
              {errors.LeaveType && (
                <p className="text-danger">{errors.LeaveType.message}</p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">LeaveDays </label>
              <input
                type="number"
                className="form-control"
                id="LeaveDays"
                {...register("LeaveDays", { valueAsNumber: true })}
              />
              {errors.LeaveDays && (
                <p className="text-danger">{errors.LeaveDays.message}</p>
              )}
            </div>
            <div className="mb-3">
              <FormLabel>Reason</FormLabel>
              <Textarea
                {...register("Reason")}
                placeholder="Your Reason"
                rows={6}
                resize="none"
                id="Reason"
              />
              {errors.Reason && (
                <p className="text-danger">{errors.Reason.message}</p>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Forms;
// ./src/components/Form.tsx
