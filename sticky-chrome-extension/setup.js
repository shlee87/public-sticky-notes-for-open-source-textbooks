function setupAuth() {
    import { Authenticator } from "@aws-amplify/ui-vue";
    import "@aws-amplify/ui-vue/styles.css";

    import { Amplify } from 'aws-amplify';
    import awsconfig from './aws-exports';

    Amplify.configure(awsconfig);

    return (
        <Authenticator>
            {({ signOut, user }) => (
                <main>
                    <h1>Hello {user.username}</h1>
                    <button onClick={signOut}>Sign out</button>
                </main>
            )}
        </Authenticator>    
    );
}