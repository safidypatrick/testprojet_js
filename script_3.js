var letter = prompt('combien de pyramide veut tu?:')

function Pyramide(n)
{
    let i;
    for(i=1; i<=n; i++)
    {
        var vide = (" ").repeat(n-i);
        var sharp = ("#".repeat(i));
        console.log(vide + sharp);
    }  
}
Pyramide(n);
