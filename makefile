all:
	@npx expo start --dev-client

dev:
	@eas build --profile development --platform android