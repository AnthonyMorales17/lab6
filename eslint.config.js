export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'lastest',
            sourceType: 'module'
        }, 
        rules: {
            semi: ['error', 'always'],
            quote: ['error', 'single']
        }
    }
]