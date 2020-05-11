import * as datalog from '@datalogui/datalog'
import { useQuery } from '@datalogui/react'

try {

  if (typeof window !== 'undefined') {
    window.datalog = datalog
    window.useQuery = useQuery
  }

  if (typeof global !== 'undefined') {
    global.datalog = datalog
    global.useQuery = useQuery

  }
} catch (e) { }
console.log("Datalog is available in the console:", datalog)