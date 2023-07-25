'use client'
import { useSearchParams } from 'next/navigation'
const ResultsInfo = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    return (
        <div className='flex flex-row items-center justify-center'>
            <span className="text-lg font-semibold text-gray-500 dark:text-white">Resultados para&nbsp;
                <span className="text-lg font-semibold text-blue-700">{search}&nbsp;</span>
                <span className='text-sm font-semibold text-gray-500 dark:text-gray-400'>(1000+)</span>
            </span>
        </div>
    );
}

export default ResultsInfo;