
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "6px",
		"--theme-rounded-container": "0px",
		"--theme-border-base": "0px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #1479dc 
		"--color-primary-50": "220 235 250", // #dcebfa
		"--color-primary-100": "208 228 248", // #d0e4f8
		"--color-primary-200": "196 222 246", // #c4def6
		"--color-primary-300": "161 201 241", // #a1c9f1
		"--color-primary-400": "91 161 231", // #5ba1e7
		"--color-primary-500": "20 121 220", // #1479dc
		"--color-primary-600": "18 109 198", // #126dc6
		"--color-primary-700": "15 91 165", // #0f5ba5
		"--color-primary-800": "12 73 132", // #0c4984
		"--color-primary-900": "10 59 108", // #0a3b6c
		// secondary | #38614a 
		"--color-secondary-50": "225 231 228", // #e1e7e4
		"--color-secondary-100": "215 223 219", // #d7dfdb
		"--color-secondary-200": "205 216 210", // #cdd8d2
		"--color-secondary-300": "175 192 183", // #afc0b7
		"--color-secondary-400": "116 144 128", // #749080
		"--color-secondary-500": "56 97 74", // #38614a
		"--color-secondary-600": "50 87 67", // #325743
		"--color-secondary-700": "42 73 56", // #2a4938
		"--color-secondary-800": "34 58 44", // #223a2c
		"--color-secondary-900": "27 48 36", // #1b3024
		// tertiary | #c08784 
		"--color-tertiary-50": "246 237 237", // #f6eded
		"--color-tertiary-100": "242 231 230", // #f2e7e6
		"--color-tertiary-200": "239 225 224", // #efe1e0
		"--color-tertiary-300": "230 207 206", // #e6cfce
		"--color-tertiary-400": "211 171 169", // #d3aba9
		"--color-tertiary-500": "192 135 132", // #c08784
		"--color-tertiary-600": "173 122 119", // #ad7a77
		"--color-tertiary-700": "144 101 99", // #906563
		"--color-tertiary-800": "115 81 79", // #73514f
		"--color-tertiary-900": "94 66 65", // #5e4241
		// success | #ffffff 
		"--color-success-50": "255 255 255", // #ffffff
		"--color-success-100": "255 255 255", // #ffffff
		"--color-success-200": "255 255 255", // #ffffff
		"--color-success-300": "255 255 255", // #ffffff
		"--color-success-400": "255 255 255", // #ffffff
		"--color-success-500": "255 255 255", // #ffffff
		"--color-success-600": "230 230 230", // #e6e6e6
		"--color-success-700": "191 191 191", // #bfbfbf
		"--color-success-800": "153 153 153", // #999999
		"--color-success-900": "125 125 125", // #7d7d7d
		// warning | #433a2d 
		"--color-warning-50": "227 225 224", // #e3e1e0
		"--color-warning-100": "217 216 213", // #d9d8d5
		"--color-warning-200": "208 206 203", // #d0cecb
		"--color-warning-300": "180 176 171", // #b4b0ab
		"--color-warning-400": "123 117 108", // #7b756c
		"--color-warning-500": "67 58 45", // #433a2d
		"--color-warning-600": "60 52 41", // #3c3429
		"--color-warning-700": "50 44 34", // #322c22
		"--color-warning-800": "40 35 27", // #28231b
		"--color-warning-900": "33 28 22", // #211c16
		// error | #15934c 
		"--color-error-50": "220 239 228", // #dcefe4
		"--color-error-100": "208 233 219", // #d0e9db
		"--color-error-200": "197 228 210", // #c5e4d2
		"--color-error-300": "161 212 183", // #a1d4b7
		"--color-error-400": "91 179 130", // #5bb382
		"--color-error-500": "21 147 76", // #15934c
		"--color-error-600": "19 132 68", // #138444
		"--color-error-700": "16 110 57", // #106e39
		"--color-error-800": "13 88 46", // #0d582e
		"--color-error-900": "10 72 37", // #0a4825
		// surface | #bab2a1 
		"--color-surface-50": "245 243 241", // #f5f3f1
		"--color-surface-100": "241 240 236", // #f1f0ec
		"--color-surface-200": "238 236 232", // #eeece8
		"--color-surface-300": "227 224 217", // #e3e0d9
		"--color-surface-400": "207 201 189", // #cfc9bd
		"--color-surface-500": "186 178 161", // #bab2a1
		"--color-surface-600": "167 160 145", // #a7a091
		"--color-surface-700": "140 134 121", // #8c8679
		"--color-surface-800": "112 107 97", // #706b61
		"--color-surface-900": "91 87 79", // #5b574f
		
	}
}