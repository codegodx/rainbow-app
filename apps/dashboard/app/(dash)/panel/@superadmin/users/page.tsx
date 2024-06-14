import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/table"

import { getAllUsers } from "@/lib/data/users"


export default async function userpage() {
  const getUser = await getAllUsers()
  return (
    <div className="godx-w-full godx-h-full godx-text-stone-100 godx-p-4">
      <Table>
        <TableCaption>Daftar Semua Karyawan</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Email</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Roles</TableHead>
            <TableHead className="text-right">Pic</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {getUser?.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.email}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>
                <option value={user.role}>
                  {user.role}
                </option>
              </TableCell>
              <TableCell className="text-right">{user.image}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">active</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
