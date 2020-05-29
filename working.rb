# pp "".gsub(/\s/, '_')

string = 'Color peaks my interest <br />Form peaks my interest <br />Function peaks my interest <br />Data peaks my interest <br />Automation peaks my interest <br />Computer Intelligence peaks my interest <br />'

string.split(' <br />').map{|i| puts i.gsub(/\s/, '_') + '<br/>'}

pp string.split(' peaks my interest <br />')