all:
	@npx expo start --dev-client

dev:
	@eas build --profile development --platform android

apk:
	@eas build --profile local --platform android