import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function TeamStandings() {
  // Sample standings data
  const standings = [
    {
      team: "Australia",
      played: 3,
      won: 3,
      lost: 0,
      nrr: "+1.256",
      points: 6,
      group: "A",
    },
    {
      team: "India",
      played: 3,
      won: 2,
      lost: 1,
      nrr: "+0.985",
      points: 4,
      group: "A",
    },
    {
      team: "New Zealand",
      played: 3,
      won: 1,
      lost: 2,
      nrr: "-0.125",
      points: 2,
      group: "A",
    },
    {
      team: "Pakistan",
      played: 3,
      won: 0,
      lost: 3,
      nrr: "-1.458",
      points: 0,
      group: "A",
    },
    {
      team: "England",
      played: 3,
      won: 3,
      lost: 0,
      nrr: "+1.875",
      points: 6,
      group: "B",
    },
    {
      team: "South Africa",
      played: 3,
      won: 2,
      lost: 1,
      nrr: "+0.756",
      points: 4,
      group: "B",
    },
    {
      team: "West Indies",
      played: 3,
      won: 1,
      lost: 2,
      nrr: "-0.325",
      points: 2,
      group: "B",
    },
    {
      team: "Sri Lanka",
      played: 3,
      won: 0,
      lost: 3,
      nrr: "-1.756",
      points: 0,
      group: "B",
    },
  ]

  // Group the standings by group
  const groupA = standings.filter((team) => team.group === "A")
  const groupB = standings.filter((team) => team.group === "B")

  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Group A</h3>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Team</TableHead>
                <TableHead className="text-center">P</TableHead>
                <TableHead className="text-center">W</TableHead>
                <TableHead className="text-center">L</TableHead>
                <TableHead className="text-center">NRR</TableHead>
                <TableHead className="text-center">Pts</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {groupA.map((team) => (
                <TableRow key={team.team}>
                  <TableCell className="font-medium">{team.team}</TableCell>
                  <TableCell className="text-center">{team.played}</TableCell>
                  <TableCell className="text-center">{team.won}</TableCell>
                  <TableCell className="text-center">{team.lost}</TableCell>
                  <TableCell className="text-center">{team.nrr}</TableCell>
                  <TableCell className="text-center font-bold">{team.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Group B</h3>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Team</TableHead>
                <TableHead className="text-center">P</TableHead>
                <TableHead className="text-center">W</TableHead>
                <TableHead className="text-center">L</TableHead>
                <TableHead className="text-center">NRR</TableHead>
                <TableHead className="text-center">Pts</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {groupB.map((team) => (
                <TableRow key={team.team}>
                  <TableCell className="font-medium">{team.team}</TableCell>
                  <TableCell className="text-center">{team.played}</TableCell>
                  <TableCell className="text-center">{team.won}</TableCell>
                  <TableCell className="text-center">{team.lost}</TableCell>
                  <TableCell className="text-center">{team.nrr}</TableCell>
                  <TableCell className="text-center font-bold">{team.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
