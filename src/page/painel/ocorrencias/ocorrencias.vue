<template>
    <div class="ocorrencia-container">
        <h2>Minhas ocorrências</h2>
        <div class="minhas-ocorrencias">
            <div class="card" v-for="(ocorrencia, index) in minhasOcorrencias" :key="index">
                <div class="icone">{{ ocorrencia.icone }}</div>
                <div class="info">
                    <h3>{{ ocorrencia.titulo }}</h3>
                    <span class="status" :class="ocorrencia.statusClasse">{{ ocorrencia.status }}</span>
                    <p>{{ ocorrencia.descricao }}</p>
                    <div class="footer">
                        <span class="tempo">{{ ocorrencia.tempo }}</span>
                    </div>
                </div>
            </div>
        </div>

        <h2>Ocorrências geral</h2>
        <div class="ocorrencias-geral">
            <div class="card-ocorrencia" v-for="(item, index) in ocorrenciasGerais" :key="index">
                <h4>{{ item.titulo }}</h4>
                <p>{{ item.descricao }}</p>
                <span class="status">{{ item.status }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Ocorrencias',
    data() {
        return {
            minhasOcorrencias: [
                { titulo: 'Barulho', status: 'Aberta', statusClasse: 'aberta', descricao: 'Som alto no apartamento 202', tempo: '2h', icone: '⚠️' },
                { titulo: 'Vazamento', status: 'Em andamento', statusClasse: 'andamento', descricao: 'Vazamento de água na cozinha', tempo: '1d', icone: '🚰' },
                { titulo: 'Segurança', status: 'Resolvido', statusClasse: 'resolvido', descricao: 'Portão ficou aberto à noite', tempo: '9d', icone: '🔒' },
            ],
            ocorrenciasGerais: [
                { titulo: "Manutenção", descricao: "Troca de bebedouros hall principal", status: "Resolvido" },
                { titulo: "Manutenção", descricao: "Troca de fechadura principal", status: "Resolvido" },
                { titulo: "Manutenção", descricao: "Reparo no portão da garagem", status: "Em andamento" },
            ]
        }
    }
}
</script>

<style scoped src="./ocorrencias.css"></style>
