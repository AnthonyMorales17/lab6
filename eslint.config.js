export default [
    {
        files: ['**/*.js'],
        languagesOptions: {
            ecmaVersion: 'lastest',
            sourceType: 'module'
        }, 
        rules: {
            semi: ['error', 'always'],
            quote: ['error', 'single']
        }
    }
]