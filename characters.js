//
//Used to create characters, ascii characters for a very basic 9-point
//monospaced font.  The format used is just the points that should be colored
//in for each column of the character.
//
var characters = {
  "A": [[2,3,4,5,6,7],[5,8],[5,8],[5,8],[2,3,4,5,6,7]],
  "B": [[2,3,4,5,6,7,8],[2,5,8],[2,5,8],[2,5,8],[3,4,6,7]],
  "C": [[3,4,5,6,7],[2,8],[2,8],[2,8],[3,7]],
  "D": [[2,3,4,5,6,7,8],[2,8],[2,8],[2,8],[3,4,5,6,7]],
  "E": [[2,3,4,5,6,7,8],[2,5,8],[2,5,8],[2,5,8],[2,8]],
  "F": [[2,3,4,5,6,7,8],[5,8],[5,8],[5,8],[8]],
  "G": [[3,4,5,6,7],[2,8],[2,8],[2,5,8],[3,4,5,7]],
  "H": [[2,3,4,5,6,7,8],[5],[5],[5],[2,3,4,5,6,7,8]],
  "I": [[],[2,8],[2,3,4,5,6,7,8],[2,8],[]],
  "J": [[3,4],[2],[2],[2],[3,4,5,6,7,8]],
  "K": [[2,3,4,5,6,7,8],[5],[4,6],[3,7],[2,8]],
  "L": [[2,3,4,5,6,7,8],[2],[2],[2],[2]],
  "M": [[2,3,4,5,6,7,8],[7],[6],[7],[2,3,4,5,6,7,8]],
  "N": [[2,3,4,5,6,7,8],[7],[6],[5],[2,3,4,5,6,7,8]],
  "O": [[3,4,5,6,7],[2,8],[2,8],[2,8],[3,4,5,6,7]],
  "P": [[2,3,4,5,6,7,8],[5,8],[5,8],[5,8],[6,7]],
  "Q": [[3,4,5,6,7],[2,8],[2,8],[2,8],[1,3,4,5,6,7]],
  "R": [[2,3,4,5,6,7,8],[5,8],[5,8],[5,8],[2,3,4,6,7]],
  "S": [[3,6,7],[2,5,8],[2,5,8],[2,5,8],[3,4,7]],
  "T": [[8],[8],[2,3,4,5,6,7,8],[8],[8]],
  "U": [[3,4,5,6,7,8],[2],[2],[2],[3,4,5,6,7,8]],
  "V": [[6,7,8],[4,5],[2,3],[4,5],[6,7,8]],
  "W": [[2,3,4,5,6,7,8],[3],[4],[3],[2,3,4,5,6,7,8]],
  "X": [[2,8],[3,7],[4,5,6],[3,7],[2,8]],
  "Y": [[6,7,8],[5],[2,3,4],[5],[6,7,8]],
  "Z": [[2,3,8],[2,4,8],[2,5,8],[2,6,8],[2,7,8]],
  "a": [[3,4,5],[2,6],[2,6],[3,6],[2,3,4,5,6]],
  "b": [[2,3,4,5,6,7,8],[2,6],[2,6],[2,6],[3,4,5]],
  "c": [[3,4,5],[2,6],[2,6],[2,6],[2,5]],
  "d": [[3,4,5],[2,6],[2,6],[2,6],[2,3,4,5,6,7,8]],
  "e": [[3,4,5],[2,4,6],[2,4,6],[2,4,6],[2,4,5]],
  "f": [[],[6],[2,3,4,5,6,7],[6,8],[8]],
  "g": [[3,4,5],[0,2,6],[0,2,6],[0,2,6],[1,2,3,4,5,6]],
  "h": [[2,3,4,5,6,7,8],[6],[6],[6],[2,3,4,5]],
  "i": [[],[],[2,3,4,5,8],[],[]],
  "j": [[0],[0],[1,2,3,4,5,6,8],[],[]],
  "k": [[2,3,4,5,6,7,8],[4],[4,5],[3,6],[2]],
  "l": [[],[],[2,3,4,5,6,7,8],[],[]],
  "m": [[2,3,4,5,6],[6],[2,3,4,5,6],[6],[2,3,4,5]],
  "n": [[2,3,4,5,6],[5],[6],[6],[2,3,4,5]],
  "o": [[3,4,5],[2,6],[2,6],[2,6],[3,4,5]],
  "p": [[0,1,2,3,4,5,6],[2,6],[2,6],[2,6],[3,4,5]],
  "q": [[3,4,5],[2,6],[2,6],[2,6],[0,1,2,3,4,5,6]],
  "r": [[2,3,4,5,6],[5],[6],[6],[5]],
  "s": [[2,5],[2,4,6],[2,4,6],[2,4,6],[3,6]],
  "t": [[],[6],[3,4,5,6,7,8],[2,6],[2,6]],
  "u": [[3,4,5,6],[2],[2],[3],[2,3,4,5,6]],
  "v": [[5,6],[3,4],[2],[3,4],[5,6]],
  "w": [[3,4,5,6],[2],[3,4,5,6],[2],[3,4,5,6]],
  "x": [[2,6],[3,5],[4],[3,5],[2,6]],
  "y": [[3,4,5,6],[0,2],[0,2],[0,2],[1,2,3,4,5,6]],
  "z": [[2,6],[2,3,6],[2,4,6],[2,5,6],[2,6]],
  " ": [[],[],[],[],[]],
  "1": [[],[7],[2,3,4,5,6,7,8],[],[]],
  "2": [[2,7],[2,3,8],[2,4,8],[2,5,8],[2,6,7]],
  "3": [[3,7],[2,8],[2,5,8],[2,5,8],[3,4,6,7]],
  "4": [[4,5],[4,6],[4,7],[2,3,4,5,6,7,8],[4]],
  "5": [[3,6,7,8],[2,6,8],[2,6,8],[2,6,8],[3,4,5,8]],
  "6": [[3,4,5,6,7],[2,6,8],[2,6,8],[2,6,8],[3,4,5]],
  "7": [[8],[8],[2,3,4,8],[5,8],[6,7,8]],
  "8": [[3,4,6,7],[2,5,8],[2,5,8],[2,5,8],[3,4,6,7]],
  "9": [[5,6,7],[2,4,8],[2,4,8],[2,4,8],[3,4,5,6,7]],
  "0": [[3,4,5,6,7],[2,4,8],[2,5,8],[2,6,8],[3,4,5,6,7]],
  "!": [[],[],[2,5,6,7,8],[],[]],
  "@": [[1,2,3,4,5,6,7],[0,4,8],[0,3,4,5,8],[0,3,8],[1,4,5,6,7]],
  "#": [[4,6],[3,4,5,6,7],[4,6],[3,4,5,6,7],[4,6]],
  "$": [[3,6],[3,5,7],[2,3,4,5,6,7,8],[3,5,7],[4,7]],
  "%": [[2,3,7],[4,6,8],[3,5,7],[2,4,6],[3,7,8]],
  "^": [[6],[7],[8],[7],[6]],
  "&": [[3,4,6,7],[2,5,8],[2,4,6,8],[3,7],[2,4]],
  "*": [[5,7],[6],[4,5,6,7,8],[6],[5,7]],
  "(": [[],[3,4,5],[1,2,6,7],[0,8],[]],
  ")": [[],[0,8],[1,2,6,7],[3,4,5],[]],
  ",": [[],[0,2,3],[1,2,3],[],[]],
  ".": [[],[2,3],[2,3],[],[]],
  "/": [[0,1],[2,3],[4],[5,6],[7,8]],
  ";": [[],[0,2,3,6,7],[1,2,3,6,7],[],[]],
  "'": [[],[],[6,7,8],[],[]],
  "[": [[],[],[0,1,2,3,4,5,6,7,8],[0,8],[]],
  "]": [[],[0,8],[0,1,2,3,4,5,6,7,8],[],[]],
  "\\": [[7,8],[5,6],[4],[2,3],[0,1]],
  "<": [[],[5],[4,6],[3,7],[2,8]],
  ">": [[],[2,8],[3,7],[4,6],[5]],
  "?": [[7],[8],[2,4,8],[5,8],[6,7]],
  ":": [[],[2,3,6,7],[2,3,6,7],[],[]],
  "\"": [[],[6,7,8],[],[6,7,8],[]],
  "{": [[4],[4],[1,2,3,5,6,7],[0,8],[0,8]],
  "}": [[0,8],[0,8],[1,2,3,5,6,7],[4],[4]],
  "|": [[],[],[0,1,2,3,4,5,6,7,8],[],[]],
  "-": [[5],[5],[5],[5],[5]],
  "_": [[2],[2],[2],[2],[2]],
  "+": [[5],[5],[3,4,5,6,7],[5],[5]],
  "=": [[4,6],[4,6],[4,6],[4,6],[4,6]],
  "~": [[7],[8],[7,8],[7],[8]],
  "`": [[],[8],[7],[6],[]],
}