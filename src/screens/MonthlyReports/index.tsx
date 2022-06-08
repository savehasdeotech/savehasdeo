import React, { ReactElement } from 'react'
import MonthlyReports from './components/MonthlyReports'

interface Props {

}

function Reports({ }: Props): ReactElement {
    return (
        <>
            <MonthlyReports />
        </>
    )
}

export default Reports