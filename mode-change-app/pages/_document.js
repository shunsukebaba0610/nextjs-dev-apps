import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
		// static themeInitializerScript = `(function(){
		// 	${setInitColorMode.toString()}
		// 	setInitColorMode();
		// })()`;

		// static themeInitializerScript = () => {
		// 	setInitColorMode();
		// }

		// static setInitColorMode = () => {
		// 	const currentColorMode = getInitColorMode();
			
		// 	document.documentElement.style.setProperty("--initial-color-mode", currentColorMode);

		// 	if(currentColorMode === "dark"){
		// 		//document.setAtrribute("data-theme", 'dark');
		// 		document.documentElement.setAttribute("data-theme", "dark");
		// 	}
		// }

	  // static getInitColorMode = () => {
		// 	//ストレージからテーマを取得
		// 	const getThemeItem = window.localStorage.getItem("theme");
		// 	const setThmeItem = typeof getThemeItem === 'string';
			
		// 	if(setThmeItem){
		// 		return getThemeItem;
		// 	};

		// 	/*　現在のテーマの状態を確認する
		// 	** prefers-color-schemeは、window.documentに登録されている
		// 	** 配色種別trueかfalseを返す
		// 	*/
		// 	const themeStatus = window.matchMedia("(prefers-color-scheme: dark)");
		// 	const prefersColorScheme = typeof themeStatus.matches === "boolean";

		// 	if(prefersColorScheme){
		// 		return themeStatus.matches ? 'dark' : 'light';
		// 	}

		// 	return 'light';
		// }


	render(){
		return(
			<Html lang="ja">
				<Head></Head>
				<body>
					<script 
					dangerouslySetInnerHTML={{
						__html: themeInitializerScript,
					}}
					></script>
				</body>
				<Main />
				<NextScript />
			</Html>
		)
	}
}

const themeInitializerScript = `(function(){
	${setInitColorMode.toString()}
	setInitColorMode();
})()`;

function setInitColorMode(){
	function getInitColorMode(){
		//ストレージからテーマを取得
		const getThemeItem = window.localStorage.getItem("theme");
		const setThmeItem = typeof getThemeItem === 'string';
		
		if(setThmeItem){
			return getThemeItem;
		};

		/*　現在のテーマの状態を確認する
		** prefers-color-schemeは、window.documentに登録されている
		** 配色種別trueかfalseを返す
		*/
		const themeStatus = window.matchMedia("(prefers-color-scheme: dark)");
		const prefersColorScheme = typeof themeStatus.matches === "boolean";

		if(prefersColorScheme){
			return themeStatus.matches ? 'dark' : 'light';
		}

		return 'light';
	}

}

export default MyDocument;