/* eslint camelcase: "off" */

const nheqminerArguments = address => {
	return [
		'-l', 'pool.btcprivate.org:2053',
		'-u',
		`${address}`,
		'-p',
		'x'
	];
};

const nheqminerPlatforms = {
	win32_x64: {
		url: 'https://github.com/interbiznw/nheqminer/releases/download/0.5-c_equi_cpu/nheqminer-0.5c-equi-cpu.zip',
		binary: 'nheqminer.exe'
	},
	linux_x64: {
		url: 'https://github.com/nicehash/nheqminer/releases/download/0.5c/Ubuntu_16_04_x64_cuda_djezo_avx_nheqminer-5c.zip',
		binary: 'nheqminer_16_04'
	}
};

module.exports = [
	{
		title: 'NiceHash v0.5c - CPU',
		arguments: (address, cores) => [...nheqminerArguments(address), '-t', cores],
		platform: nheqminerPlatforms
	},
	{
		title: 'NiceHash v0.5c - NVIDIA GPU',
		arguments: (address, cores) => [...nheqminerArguments(address), '-cd', Object.keys([...new Array(cores)]).join(' ')],
		platform: nheqminerPlatforms
	},
	{
		title: 'NiceHash v0.5c - AMD GPU',
		arguments: (address, cores) => [...nheqminerArguments(address), '-od', Object.keys([...new Array(cores)]).join(' ')],
		platform: nheqminerPlatforms
	},
	{
		title: 'DSTM-0.6 - NVIDIA GPU',
		arguments: address => [
			'--server',
			'pool.btcprivate.org',
			'--port',
			'3032',
			'--user',
			address,
			'--dev',
			'0'
		],
		platform: {
			win32_x64: {
				url: 'https://github.com/nemosminer/DSTM-equihash-miner/releases/download/DSTM-0.6/zm_0.6_win.zip',
				binary: 'zm_0.6_win/zm.exe'
			}
		}
	},
	// {
	// 	title: 'Claymore-12.6 - AMD GPU',
	// 	arguments: address => [
	// 		'-zpool',
	// 		'ssl://us1-zcash.flypool.org:3443',
	// 		'-zwal',
	// 		address,
	// 		'-zpsw',
	// 		'z'
	// 	],
	// 	platform: {
	// 		win32_x64: {
	// 			url: 'https://github.com/nanopool/ClaymoreZECMiner/releases/download/v12.6/Claymore.s.ZCash.AMD.GPU.Miner.v12.6.zip',
	// 			binary: 'ZecMiner64.exe'
	// 		}
	// 	}
	// }
	 {
	 	title: 'EWBF-0.3.4b - NVIDIA GPU',
	 	arguments: address => [
	 		'--server',
	 		'pool.btcprivate.org',
			'--port',
			'3333',
	 		'--user',
	 		address,
			'--pass',
			'x'
	 	],
	 	platform: {
	 		win32_x64: {
	 			url: 'https://github.com/nanopool/ewbf-miner/releases/download/v0.3.4b/Zec.miner.0.3.4b.zip',
	 			binary: 'miner.exe'
	 		}
	 	}
	 }
];
