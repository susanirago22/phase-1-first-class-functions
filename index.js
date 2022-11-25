function receivesAFunction(callback)
{
    callback()
}
function returnsANamedFunction()
{
    function p()
    {
        
    }
        return p
}
function returnsAnAnonymousFunction()
{
    
    return ()=>{}
}