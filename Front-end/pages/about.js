import MyLayout from '../components/MyLayout';

export default () => (
    <MyLayout>
        <div class="ui piled segment" style={{ textAlign: 'center' }}>
            <h1 class="ui header">프로젝트 소개</h1>
            <p>
                <h3><a href="https://nextjs.org/">Next.js</a></h3>
                <h3><a href="https://semantic-ui.com/">Semantic UI</a></h3>
                <h3>를 이용하여 만든 프로젝트 입니다.</h3>
            </p>
        </div>
    </MyLayout>
)

