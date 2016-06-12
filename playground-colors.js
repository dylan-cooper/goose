var ColorSchemes = {
  'banana': color_gradient([[1,1,0],[1,1,0.8]]),
  'lemonade': color_gradient([[1,0,0.8],[1,0.8,0]]),
  'dotme': color_gradient(["#33AAEE","#FFFFFF"].map(color_format)),
  'honey': color_gradient([[1,0.7,0.15], [0.75,0.35,0.35]]),
  'favereds': color_gradient([[1,0.4,0.5], [0.7,0.1,0]]),
  'redwhiteblue': color_gradient([[0.9,0.09,0.18], [1,1,1], [0,0.32,0.64]]),
  'potofgold': color_gradient(
    ["#194719","#56A110","#87BA65","#E8E4B5","#F59E07"].map(color_format)
  ),
  'goldfish': color_gradient(
    ["#69D2E7","#A7DBD8","#E0E4CC","#F38630","#FA6900"].map(color_format)
  ),
  'adrift': color_gradient(
    ["#CFF09E","#A8DBA8","#79BD9A","#3B8686","#0B486B"].map(color_format)
  ),
  'maple': color_gradient(
    ["#744747","#E96341","#EC8A63","#EFCBAD","#C58F7A"].map(color_format)
  ),
  'autumn': color_gradient(
    ["#F29133","#C33E1F","#7F2332","#40202D"].map(color_format)
  ),
  'trial': color_gradient(
    ["#F29133","#C33E1F","#7F2332","#40202D"].map(color_format)
  ),
}
