import { Box } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
const list = [
  "Name",
  "Email",
  "Emp ID",
  "Position",
  "StartDate",
  "EndDate",
  "Leave Type",
  "LeaveDays",
  "Reason",
  "Tstatus",
  "Mstatus",
  "Cstatus",
];

interface employye {
  Name: string;
  Email: string;
  EmpID?: number;
  Position: string;
  StartDate: Date;
  EndDate: Date;
  LeaveType: string;
  LeaveDays: number;
  Reason: string;
  Tstatus?: string;
  Mstatus?: string;
  Cstatus?: string;
}

const employee: employye[] = [
  {
    Name: "John",
    Email: "jhon@gmail.com",
    EmpID: 1234,
    Position: "developer",
    StartDate: new Date("2000-05-21"),
    EndDate: new Date("2000-05-23"),
    LeaveType: "sick",
    LeaveDays: 2,
    Reason:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam laborum illo molestias, vero incidunt quidem quaerat consequatur sequi velit!",
    Tstatus: "approved",
  },
  {
    Name: "sameer",
    Email: "jhon@gmail.com",
    EmpID: 1234,
    Position: "developer",
    StartDate: new Date("2000-05-21"),
    EndDate: new Date("2000-05-23"),
    LeaveType: "sick",
    LeaveDays: 2,
    Reason:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam laborum illo molestias, vero incidunt quidem quaerat consequatur sequi velit!",
    Tstatus: "approved",
  },
];
const Lists = () => {
  return (
    <>
      <Box fontSize={["medium", "15px"]}>
        <table className="table table-bordered ">
          <thead className="table-dark">
            <tr>
              {list.map((list) => (
                <th className=" text-center">{list}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employee.map((emp) => (
              <tr key={emp.EmpID}>
                <th>{emp.Name}</th>
                <th>{emp.Email}</th>
                <th className="text-center">{emp.EmpID}</th>

                <th>{emp.Position}</th>
                <th>{emp.StartDate.toLocaleDateString()}</th>
                <th>{emp.EndDate.toLocaleDateString()}</th>
                <th className="text-center">{emp.LeaveType}</th>
                <th className="text-center">{emp.LeaveDays}</th>
                <th>{emp.Reason}</th>
                <th>{}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </>
  );
};

export default Lists;
