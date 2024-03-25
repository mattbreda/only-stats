"use client"

const { getTeams } = require("@/lib/getTeams")

const TestFetch = () => {
    const sendRequest = () => {
        getTeams()
    }
    return <button onClick={sendRequest}>Get teams</button>
}
export default TestFetch;