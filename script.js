document.write('<table border="1">'); 
for (let i = 1; i <= 10; i++) {
    document.write('<tr>'); 
    for (let j = 1; j <= 10; j++) {
        let result = i * j; 
        document.write('<td>' + result + '</td>'); 
    }
    document.write('</tr>'); 
}
document.write('</table>');