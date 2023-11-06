/**
 * 배열의 요소를 무작위로 섞는 유틸 함수
 * - Fisher-Yates shuffle 알고리즘 적용
 * - 배열이 가진 요소를 무작위로 하나씩 지워가면서 새로운 순서를 정의
 * @param array 대상 문자열 배열
 * @returns 무작위로 섞인 문자열 배열
 */
export const shuffleArray = (array: string[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const randomPos = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[randomPos];
		array[randomPos] = temp;
	}

	return array;
};

/**
 * basse64를 일반 문자열로 변환해주는 유틸 함수
 * @param encodedString 디코딩 대상 base64 문자열
 * @returns 디코딩된 문자열
 */
export const base64Decode = (encodedString: string) => {
	try {
		const decodedString = atob(encodedString);
		return decodedString;
	} catch (error) {
		console.error('Error decoding Base64:', error);
		return null;
	}
};
