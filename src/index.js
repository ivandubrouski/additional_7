module.exports = function solutionSudoku(matrix) {

	let counter=0;
	for(let i=0;  i<9; i++){
		for (let j=0; j<9; j++){
			if (matrix[i][j]===0){
				counter++;
			}
		}
	}
	function solution(matrix){
		if(counter ===0){
			return matrix;
		}
		let freeCell=findFreeCell(matrix);
		let row=freeCell[0];
		let col=freeCell[1];
		for(let j=1; j < 10; j++){
			let key=checker(matrix,row,col,j);
			if(key){
				matrix[row][col]=j;
				counter--;      
				if(solution(matrix)){
					return matrix;
				}
				else{
					matrix[row][col]=0;
					counter++;
				}      
			}
		}
	}
	function findFreeCell(matrix){
		freeCell=null;
		for(i=0; i<9; i++){
			for(j=0; j<9; j++){
				if(matrix[i][j]===0){
					return [i,j];
				}
			}
		}
	}

	function ifPossibleInCollumn(matrix,col,num){
		for(i = 0; i < 9; i++){
			if(matrix[i][col]===num){
				return false;
			}    
		}
		return true;
	}
	function ifPossibleInRow(matrix,row,num){
		for(j=0; j<9; j++){
			if(matrix[row][j]===num){
				return false;
			}    
		}
		return true;
	}

	function boxChecker(matrix,row,col,num){
		col=Math.floor(col/3)*3;
		row=Math.floor(row/3)*3;
		for(i=0; i<3; i++){
			for(let j =0; j<3; j++){
				if (matrix[row+i][col+j]===num){
					return false;
				}
			}
		}
		return true;
	}
	function checker(matrix,row,col,num){
		if (ifPossibleInRow(matrix,row,num) && ifPossibleInCollumn(matrix,col,num) && boxChecker(matrix,row,col,num)){
			return true;
		} else return false;
	}
	return solution(matrix);
}