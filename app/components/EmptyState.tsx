const EmptyState = () => {
    return(
        <div 
          className='
            px-4
            py-10
            sm:px-6
            lg:px-8
            h-full
            flex
            justify-center
            items-center
            bg-zinc-800'
        >
            <div className='text-center items-center flex flex-col'>
                <h3 className='
                      mt-2
                      text-2xl
                      font-semibold
                      text-slate-50'>
                    Select chat or new conversation
                </h3>
            </div>
        </div>
    )
}

export default EmptyState;